import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import PropTypes from "prop-types";
import { EVENT, VIEW_TYPE } from "./Utils/constants";
import { getThrottle } from "./Utils/throttle";

const QUERY_MOB = "only screen and (min-width: 320px) and (max-width: 1023px)";
const QUERY_TAB = "only screen and (min-width: 769px) and (max-width: 1023px)";
const QUERY_WEB = "only screen and (min-width: 1024px)";

const MEDIA_WEB = window.matchMedia(QUERY_WEB);
const MEDIA_TAB = window.matchMedia(QUERY_TAB);
const MEDIA_MOB = window.matchMedia(QUERY_MOB);

const DELAY = 100;

/**
 *
 * @returns {string} - one of the VIEW_TYPE
 */
const getInitialScreen = () => {
  if (MEDIA_WEB.matches) {
    return VIEW_TYPE.WEB;
  }
  if (MEDIA_TAB.matches) {
    return VIEW_TYPE.TAB;
  }
  if (MEDIA_MOB.matches) {
    return VIEW_TYPE.MOB;
  }
};

const MediaTypeContext = createContext(getInitialScreen());

/**
 * MediaTypeProvider:
 *  - Provides a Context Wrapper
 *    The component listen to MediaQueryUpdates and return VIEW_TYPE [ 'WEB', 'MOB' 'TAB']
 */
export function MediaTypeProvider(props) {
  const throttle = getThrottle("MediaTypeResizeThrottle");

  const [type, setType] = useState(getInitialScreen());

  const matchWeb = useCallback(() => MEDIA_WEB.matches, []);

  const matchTab = useCallback(() => MEDIA_TAB.matches, []);

  const matchMob = useCallback(() => MEDIA_MOB.matches, []);

  const setNewType = useCallback(() => {
    switch (true) {
      case matchMob(): {
        setType(VIEW_TYPE.MOB);
        break;
      }
      case matchTab(): {
        setType(VIEW_TYPE.TAB);
        break;
      }
      case matchWeb():
      default:
        setType(VIEW_TYPE.WEB);
    }
  }, [setType, matchWeb, matchTab, matchMob]);

  const onResize = useCallback(() => {
    throttle(setNewType, DELAY);
  }, [setNewType]);

  useEffect(() => {
    window.addEventListener(EVENT.RESIZE, onResize);
    return () => window.removeEventListener(EVENT.RESIZE, onResize);
  }, [onResize]);

  useEffect(() => {
    setNewType();
  }, [setNewType]);

  return (
    <MediaTypeContext.Provider value={type}>
      {props.children}
    </MediaTypeContext.Provider>
  );
}

MediaTypeProvider.propTypes = {
  /**
   * Root node for all child components that need to use MediaType Context
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

/**
 * useMediaType: Hook to get the current VIEW_TYPE
 */
export function useMediaType() {
  const mediaType = useContext(MediaTypeContext);
  return mediaType;
}

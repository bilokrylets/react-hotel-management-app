import { useEffect, useRef } from 'react';

function useClickOutside(handler: any, listenCapturing = true) {
  const ref: React.MutableRefObject<any> = useRef();
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return { ref };
}

export default useClickOutside;

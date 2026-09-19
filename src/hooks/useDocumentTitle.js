import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) {
      document.title = title;
    }
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}

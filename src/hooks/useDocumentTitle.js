import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${title} | The Wild Oasis`;

    return () => {
      document.title = originalTitle;
    };
  }, [title]);
}

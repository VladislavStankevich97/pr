export const getPageId = () => {
  const page = document.location.pathname;
  let selectedPage = -1;
  switch (page) {
    case "/home":
      selectedPage = 0;
      break;
    case "/appointments":
      selectedPage = 1;
      break;
  }
  return selectedPage;
};

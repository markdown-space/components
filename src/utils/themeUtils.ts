export const updateThemeStylesheet = (
    theme: Theme,
    onLoad: () => void,
    id: string,
    context: Document = document
  ) => {
    const url = `https://cdn.jsdelivr.net/npm/@markdownspace/markdownswatch/css/${theme.id}.css`
    const themeLinks = context.querySelectorAll('link[href*="markdownswatch"]');
    themeLinks.forEach((link) => link.remove());
  
    const newLink = context.createElement('link');
    newLink.id = id;
    newLink.rel = 'stylesheet';
    newLink.href = url;
  
    newLink.onload = () => {
      context.documentElement.setAttribute('data-theme', theme.dataTheme);
      onLoad();
    };
    newLink.onerror = () => {
      newLink.remove();
      onLoad();
    };
  
    const bulmaLink = context.querySelector('link[href*="bulma"]');
    if (bulmaLink) {
      bulmaLink.parentNode?.insertBefore(newLink, bulmaLink.nextSibling);
    } else {
      context.head.appendChild(newLink);
    }
  };
  
  export const fetchThemes = async (): Promise<Theme[]> => {
    const response = await fetch('https://cdn.jsdelivr.net/npm/@markdownspace/markdownswatch/themes.json');
    const data: { themes: Theme[] } = await response.json();
    return data.themes;
  };
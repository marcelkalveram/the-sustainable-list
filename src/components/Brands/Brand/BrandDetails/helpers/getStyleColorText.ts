const getStyleColorText = (style: string): string => {
  switch (style) {
    case "casual":
      return "#E2AD38";
    case "sporty":
      return "#E58B6D";
    case "swim":
      return "#788E90";
    case "lingerie":
      return "#E4A3A1";
    case "wedding":
      return "#AF95C8";
    case "elegant":
      return "#8F8F8F";
    case "business":
      return "#7190AA";
    default:
      return "#EDF0F2";
  }
};

export default getStyleColorText;

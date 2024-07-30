const getStyleColor = (style: string): string => {
  switch (style) {
    case "casual":
      return "#FFFAD2";
    case "sporty":
      return "#FEE3C9";
    case "swim":
      return "#E7F9FF";
    case "lingerie":
      return "#FFF6F6";
    case "wedding":
      return "#FAF5FF";
    case "elegant":
      return "#F3F3F3";
    case "business":
      return "#D4E1E6";
    default:
      return "#EDF0F2";
  }
};

export default getStyleColor;

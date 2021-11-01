export const formatStatus = (status: string) => {
  switch (status) {
    case "OFFLINE":
      return (
        <div
          style={{
            backgroundColor: "grey",
            borderRadius: "100px",
            width: "10px",
            height: "10px",
          }}
        />
      );
      break;
    case "ONLINE":
      return (
        <div
          style={{
            backgroundColor: "green",
            borderRadius: "100px",
            width: "10px",
            height: "10px",
          }}
        />
      );
      break;
    case "DATE":
      return (
        <div
          style={{
            backgroundColor: "red",
            borderRadius: "100px",
            width: "10px",
            height: "10px",
          }}
        />
      );
      break;
    default:
      break;
  }
};
export const formatDate = (dateStr: string) => {
  const lastLoginDay: any = new Date(dateStr);
  const today: any = new Date();
  const dateObj = today - lastLoginDay;
  return Math.round(dateObj / 1000 / 60 / 60 / 24);
};

export const capitalizeFirstChar = (text: string) => {
  console.log(`text`, text);
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

export const formatRole = (roleText: string) => {
  console.log(`roleText`, roleText);
  switch (roleText) {
    case "VERSATILE":
      return "V";
      break;
    case "BOTTOM_ONLY":
      return "B";
      break;
    case "TOP_ONLY":
      return "T";
      break;
    case "MORE_TOP":
      return "+T";
      break;
    case "MORE_BOTTOM":
      return "+B";
      break;
    default:
      break;
  }
};

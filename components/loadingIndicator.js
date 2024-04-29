const { Typography } = require("@mui/material")

const LoadingIndicator = ({ loadingState }) => {
  return <Typography variant="h3">{loadingState}</Typography>
}

export default LoadingIndicator;
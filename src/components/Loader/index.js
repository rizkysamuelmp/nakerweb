// Loader Component
// --------------------------------------------------------
import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import CircularProgress from "@mui/material/CircularProgress";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";

const Loader = ({ isLoading }) => (
  <Dialog open={isLoading}>
    <DialogContent>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </DialogContent>
  </Dialog>
);

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;

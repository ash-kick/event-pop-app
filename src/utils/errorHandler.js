export const getErrorMessage = (error) => {
     if (error.response) {
          return error.response.data?.message || "An error occured. Please try again.";
     } else return "An unexpected error occured. Please try again.";
};

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useStyles } from "@/pages/posts/styles";

export default function Loading() {
  const { classes } = useStyles();
  return (
    <>
      {[...Array(20).keys()].map((item, index) => {
        return (
          <div key={index}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={221} height={123} />
              <Skeleton variant="rectangular" width={80} height={25} />
              <Skeleton variant="rectangular" width={221} height={10} />
              <Skeleton variant="rectangular" width={221} height={10} />
              <Skeleton variant="rectangular" width={100} height={10} />
              <div className="loadingChips">
                <Skeleton
                  variant="rectangular"
                  width={60}
                  height={30}
                  className="loadingChip"
                />
                <Skeleton
                  variant="rectangular"
                  width={60}
                  height={30}
                  className="loadingChip"
                />
                <Skeleton
                  variant="rectangular"
                  width={60}
                  height={30}
                  className="loadingChip"
                />
              </div>
            </Stack>
          </div>
        );
      })}
    </>
  );
}

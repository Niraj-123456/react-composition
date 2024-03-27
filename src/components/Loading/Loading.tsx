import CircularProgress from "../common/CircularProgress/CircularProgress";

const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh-var(--default-header-height))] grid place-items-center">
      <CircularProgress className="w-12 h-12" />
    </div>
  );
};

export default Loading;

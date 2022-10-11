interface IMiddle {
  middle?: boolean;
}
function Loading({ middle = false }: IMiddle) {
  return (
    <div className={middle === true ? 'h-100 d-flex align-items-center justify-content-center' : 'd-flex justify-content-center mt-2'}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;

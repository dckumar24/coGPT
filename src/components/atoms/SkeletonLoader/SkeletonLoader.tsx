// SkeletonLoader.js
import './SkeletonLoader.css'; // Import the CSS file for styling

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-header"></div>
      <div className="skeleton-content"></div>
      <div className="skeleton-footer"></div>
      <br></br>
      <div className="skeleton-header"></div>
      <div className="skeleton-content"></div>
      <div className="skeleton-footer"></div>
 
    </div>
  );
};

export default SkeletonLoader;

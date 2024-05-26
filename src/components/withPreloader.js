import React, { useEffect, useState } from 'react'
import Preloader from './Preloader';

function withPreloader(WrappedComponent) {
    return function WithPreloader(props) {
      const [loading, setLoading] = useState(true);
  
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000); 
  
        return () => clearTimeout(timer);
      }, []);
  
      if (loading) {
        return <Preloader />; 
      }
  
      return <WrappedComponent {...props} />;
    };
  }

  export default withPreloader;
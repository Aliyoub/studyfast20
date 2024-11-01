

'use client'

import { useInView } from 'react-intersection-observer';

function ComponentVisibility() {
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the element is visible
      });
    return (
        <div>
          <div style={{ height: '200vh' }} />
          <div ref={ref} style={{ height: '100px', background: inView ? 'green' : 'red' }}>
            {inView ? 'Visible' : 'Not Visible'}
          </div>
          <div style={{ height: '200vh' }} />
        </div>
      );
  // )
}

export default ComponentVisibility
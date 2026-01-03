import Image from 'next/image';

export default function ImageOptimizationPage() {
  return (
    <div style={{ padding: '20px', color: '#000', backgroundColor: '#fff', minHeight: '100vh' }}>
      <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        Exercise 4: Image & Font Optimization
      </h1>

      {/* --- Requirement 2: Standard <img> Tag --- */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#333' }}>1. Standard &lt;img&gt; Tag (Causes Layout Shift)</h2>
        <p style={{ color: '#666' }}>Observe how the text below "jumps" when this image loads. This is known as Cumulative Layout Shift (CLS).</p>
        
        <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #ccc', marginTop: '15px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/hero.jpg" 
            alt="Unoptimized Hero" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
        
        <div style={{ background: '#ffeeee', padding: '15px', marginTop: '10px', borderRadius: '5px', border: '1px solid #ffcccc' }}>
          <strong>CLS Warning:</strong> This text box is pushed down suddenly once the image finishes downloading.
        </div>
      </section>

      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '40px 0' }} />

      {/* --- Requirement 3: next/image Component --- */}
      <section>
        <h2 style={{ fontSize: '1.2rem', color: '#333' }}>2. next/image Component (Optimized - No Layout Shift)</h2>
        <p style={{ color: '#666' }}>This component reserves the space immediately. It also automatically serves optimized formats like WebP.</p>
        
        <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #ccc', marginTop: '15px' }}>
          <Image 
            src="/hero.jpg" 
            alt="Optimized Hero" 
            width={1200} 
            height={675} 
            priority 
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        
        <div style={{ background: '#eef7ff', padding: '15px', marginTop: '10px', borderRadius: '5px', border: '1px solid #cce5ff' }}>
          <strong>Optimized Result:</strong> This text stays in place because the image height was pre-calculated.
        </div>
      </section>
    </div>
  );
}
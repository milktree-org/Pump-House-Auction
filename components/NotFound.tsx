import React from 'react';
import Button from './Button.tsx';

const NotFound: React.FC = () => (
  <section className="bg-pumphouse-bg min-h-[60vh] flex items-center justify-center px-6 py-32">
    <div className="text-center max-w-lg">
      <span className="text-[10px] uppercase tracking-[0.5em] text-pumphouse-gold font-bold mb-6 block">
        Error 404
      </span>
      <h1 className="font-serif text-4xl md:text-6xl text-pumphouse-charcoal mb-8 leading-tight">
        Page Not Found
      </h1>
      <p className="text-[#666] font-light leading-relaxed mb-12">
        The page you are looking for may have moved, or is not yet available.
      </p>
      <Button href="/" variant="primary">
        Return Home
      </Button>
    </div>
  </section>
);

export default NotFound;

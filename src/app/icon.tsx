import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

const icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '4px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        IO
      </div>
    ),
    size,
  );
};

export default icon;

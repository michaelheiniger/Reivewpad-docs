import React from 'react';

export default function LoomVideo({url}) {
  return (
    <div style={{ position: "relative", paddingBottom: "62.5%", height: 0 }}>
        <iframe
            src={url}
            frameBorder={0}
            //webkitallowfullscreen={true}
            //mozallowfullscreen={true}
            allowFullScreen={true}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
        />
    </div>
  );
}
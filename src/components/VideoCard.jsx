import React from 'react';

export default function VideoCard({ video }) {
  return (
    <div>
      <p>{video.snippet.title}</p>
    </div>
  );
}

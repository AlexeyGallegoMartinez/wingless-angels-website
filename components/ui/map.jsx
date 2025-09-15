// components/Map.tsx
export default function Map() {
  return (
    <div className="w-full  rounded-sm overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d3639.943222087877!2d-80.2580120638963!3d25.76552639115081!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7745b3fffff%3A0x67c3e93be9875e16!2s717%20Ponce%20de%20Leon%20suite%20323%20A%2C%20Coral%20Gables%2C%20FL%2033134!5e1!3m2!1sen!2sus!4v1757727998322!5m2!1sen!2sus"
        className="w-full "
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

const Entry = (props) => {
  return (
    <div className="entry-container">
      <div className="entry-image-container">
        <img
          className="entry-image"
          src={props.entry.img.src}
          alt={props.entry.img.alt}
        />
      </div>
      <div className="entry-text">
        <h3 className="entry-text-location">
          {props.entry.country}{" "}
          <a href={props.entry.googleMapsLink}>View on Google Maps</a>
        </h3>
        <h1 className="entry-text-name">{props.entry.title}</h1>
        <h3 className="entry-text-date">12 Jan, 2021 - 24 Jan, 2021</h3>
        <h3 className="entry-text-text">{props.entry.text}</h3>
      </div>
    </div>
  );
};

export default Entry;

/*
Props makes components reusable 

To pass a prop into a component, the properties will be defined in the app/parent function, the name props will be passed into the component parameter, and then the props object will be assessed in the component.

No you cannot. That is because the prop name blahblahblah is not recognizable in defualt html

To receive props in a component, pass it in as the parameter

props is an object
*/

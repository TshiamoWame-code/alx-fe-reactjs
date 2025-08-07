const UserProfile = (props) => {
  return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}></span> {props.age}</p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}></span>{props.bio}</p>
    </div>
  );
};

export default UserProfile;

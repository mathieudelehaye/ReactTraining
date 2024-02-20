function ProfileCard({ image, title, handle }) {
    // console.log(title, handle)

    return (
        <div>
            <img src={image} />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}
export default ProfileCard;
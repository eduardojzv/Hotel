export default function VideoPresentation() {
    return (
        <>
            <video className='object-cover w-full h-full bg-center' muted autoPlay>
                <source src='videos_gif/homePresentation.mp4' type="video/mp4" />
            </video>
        </>
    )
}
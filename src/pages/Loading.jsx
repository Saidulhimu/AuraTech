import { GridLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center  ">
            <GridLoader
                loading={true}
                color="#5c2d7c"
                cssOverride={{}}
                size={50}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Loading
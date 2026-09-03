import { GridLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center  ">
            <GridLoader
                loading={true}
                color="#854faa"
                cssOverride={{}}
                size={150}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Loading
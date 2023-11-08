const FetchError = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">500</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Internal Server Error.
            </p>

            <p className="mt-4 text-gray-500">We are already working to solve the problem..</p>

           
        </div>
</div>  
  )
}

export default FetchError
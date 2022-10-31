import Link from 'next/link';
//import imagesConfig, { EXT } from '../../urls/images';

export default function Card({item, classes}) {
    return (
        <div
            className={`relative block bg-white rounded-lg shadow-lg ${classes}`}
        >
            <div className="flex justify-center">
                <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    {/* <img
                        src={`${imagesConfig.CATEGORIES}/${item.id}.${EXT}`}
                        alt={`${imagesConfig.CATEGORIES}/${item.id}`}
                        className="w-full"
                    /> */}
                    <a href="#!">
                        <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                            style={{
                                backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                        ></div>
                    </a>
                </div>
            </div>
            <div className="p-6">
                <h5 className="font-bold text-lg mb-3">{item.title}</h5>
                {/* <p className="text-gray-500 mb-4">
                    <small>
                        Published <u>13.01.2022</u> by
                        <a href="" className="text-gray-900">
                            Anna Maria Doe
                        </a>
                    </small>
                </p> */}
                <p className="mb-4 pb-2 text-left">{item.description}</p>
                <Link
                    href={`${item.id}`}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    
                >
                    <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">shop now</a>
                </Link>
            </div>
        </div>
    );
};

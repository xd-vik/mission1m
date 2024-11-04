import React from 'react';
import ReactDOM from 'react-dom';
// Ensure Tailwind CSS is imported here

const data = [
  {
    img: "/img/1000_F_631526147_uIiqKqWbZEgwLLd0vbLwcim1cKlQyokN 1.jpg",
    instructorImg: "/img/images 1.png",
    instructor: "Jason Williams",
    sub: "Science",
    title: "Data Science And Machine Learning with Python-Hands On",
    duration: "8 hr 15 mins",
    lectures: "29 lectures",
    price: 385.00,
    rating: 4.9,
    star: "/img/Star 4.png"
  },
  {
    img: "/img/african-students-computer-29039508 1.jpg",
    instructorImg: "/img/images (1) 1.png",
    instructor: "Jason Williams",
    sub: "Science",
    title: "Data Science And Machine Learning with Python-Hands On",
    duration: "8 hr 15 mins",
    lectures: "29 lectures",
    price: 420.00,
    rating: 4.9,
    star: "/img/Star 4.png"
  },
  {
    img: "/img/Brown-university-admission-jpg 1.jpg",
    instructorImg: "/img/images (1) 1.png",
    instructor: "Rose Simmons",
    sub: "Science",
    title: "Culture and Leadership: Strategies for a successful business",
    duration: "8 hr 15 mins",
    lectures: "29 lectures",
    price: 350.00,
    rating: 4.9,
    star: "/img/Star 4.png"
  }
];

const Card = ({ data }) => {
  return (
    <div className="mb-20 bg-white shadow-lg rounded-lg overflow-hidden border border-green-700 p-4 m-12 max-w-xs  transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-green-600">
      <img src={data.img} alt={data.title} className="w-full h-32 object-cover rounded-xl rounded-xl" />
      <div className="flex items-center mt-2">
        <img src={data.instructorImg} alt={data.instructor} className="w-10 h-10 rounded-full mr-2" />
        <div className='flex justify-between items-center mt-4'>
            <span className='text-md font-bold'>{data.instructor}</span>
          <p className="text-md  ml-16 text-green-800">{data.sub}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-2">{data.title}</h3>
    <div className='flex justify-between items-center mt-4'>
        <span className='text-gray-500 mt-1'> {data.lectures}</span>
    <p className="text-gray-500 mt-1">{data.duration}</p>

    </div>
      <div className="flex justify-between items-center mt-4 border-2-green rounded-xl p-1 ">
        <span className="text-lg font-bold">${data.price.toFixed(2)}</span>
        <div className="flex items-center ">
          <span className="text-gray-600">{data.rating}</span>
          <img src={data.star} alt="Rating" className="w-5 h-5 mr-1" />
          <img src={data.star} alt="Rating" className="w-5 h-5 mr-1" />
        </div>
      </div>
    
    </div>
  );
};

const UserCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default UserCard;

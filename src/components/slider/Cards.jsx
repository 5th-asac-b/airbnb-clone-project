import data from "../../../data.json";
import CardImageBox from "./CardImageBox";

export default function Cards() {
  return (
    <div className="card" >
      <ul className="card-wrap grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data.roomInfo.map((item) => (
          <li className="card-item p-2" key={item.id}>
            <CardImageBox images={item.imageUrl} />
            <div className="txt mt-4">
              <h3 className="title text-md font-semibold">{item.title}</h3>
              <div className="host text-gray-600">
                <p>호스트: {item.host} 님</p>
              </div>
              <span className="price text-md font-bold">${item.pricePerDay}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

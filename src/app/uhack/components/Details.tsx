export default function Details () {
    return (
        <div className="my-16">
            <h3 className="text-3xl font-bold">Event Details</h3>
            <ol className="list-disc p-4">
                <li>Date: October 19th-20th, 2024</li>
                <li>Time: 9:00 AM Saturday - 9:00 AM Sunday</li>
                <li>Location: Shalala Grand Ballrooms or Lakeside Village, University of Miami</li>
            </ol>

            <div className="py-2">
                <h4 className="text-xl font-bold">Costs</h4>
                <p>We are committed to keeping UHack accessible. While a $10-$20 fee may be considered, our goal is to keep the event free for all participants.</p>
            </div>

            <div className="py-2">
                <h4 className="text-xl font-bold">Food & Refreshments</h4>
                <p>Food and refreshments from potential sponsors will be provided.</p>
            </div>
        </div>
    )
}
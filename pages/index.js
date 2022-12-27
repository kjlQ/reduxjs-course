import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import { Fragment } from "react";

export default function HomePage(props) {
  return (
    <Fragment>
      <EventList items={props.events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

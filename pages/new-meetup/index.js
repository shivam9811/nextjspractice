import { useRouter } from "next/router";
import Head from "next/head";
import MeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add A New Meetup</title>
        <meta name="description" content="Add your own meetUps"></meta>
      </Head>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetUpPage;

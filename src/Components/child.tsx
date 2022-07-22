import { useState } from "react";

type User = {
  firstName: string;
};

const Child1 = (props: any) => {
  const [data, setdata] = useState<User>({
    firstName: "",
  });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const submit = () => {
    props.method(data);
    console.log("Submit", data);
  };
  console.log("child-1 Data --->", data);

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handlechange}
      />
      <button type="button" onClick={submit}>
        submit!
      </button>
    </div>
  );
};
export default Child1;

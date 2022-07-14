import { ComponentStory } from "@storybook/react";
import Icons from "./index";
import Location from "../../../assets/icons/locc.png";
import Message from "../../../assets/icons/message.svg";
import Notification from "../../../assets/icons/notifications.svg";
import jobs from "../../../assets/icons/jobs.png";
import Train from "../../../assets/icons/trainIcon.svg";

import Scooty from "../../../assets/icons/scootyIcon.svg";
import More from "../../../assets/icons/more.svg";
import Swap from "../../../assets/icons/swap.svg";
import Back from "../../../assets/icons/back.svg";
import Current from "../../../assets/icons/current.svg";
import Avatar from "../../../assets/icons/Avatar.svg";
import Save from "../../../assets/icons/save.svg";

import Settings from "../../../assets/icons/settings.svg";
import Contact from "../../../assets/icons/contact.svg";
import Dashboard from "../../../assets/icons/dashboard.svg";
import PracticeTest from "../../../assets/icons/practiceTest.svg";
import Vector from "../../../assets/icons/Vector.svg";
import Cab from "../../../assets/icons/cab.svg";
import Close from "../../../assets/icons/close.svg";
import Rupee from "../../../assets/icons/rupee.svg";
import Bus from "../../../assets/icons/bus.svg";
import Filter from "../../../assets/icons/filter.svg";

export default{
    title: "Atom/Icons",
    component: Icons
};


const Template:ComponentStory<typeof Icons> = args => (<Icons {...args}/>);

export const location = Template.bind({});
location.args={
    source: Location
};
export const message = Template.bind({});
message.args={
    source: Message
};
export const notification = Template.bind({});
notification.args={
    source: Notification
};
export const job = Template.bind({});
job.args={
    source: jobs
};
export const train = Template.bind({});
train.args={
    source: Train
};


export const back = Template.bind({});
back.args={
    source: Back
};
export const scoty = Template.bind({});
scoty.args={
    source: Scooty
};
export const more = Template.bind({});
more.args={
    source: More
};
export const swap = Template.bind({});
swap.args={
    source: Swap
};
export const current = Template.bind({});
current.args={
    source: Current
};
export const avatar = Template.bind({});
avatar.args={
    source: Avatar
};
export const save = Template.bind({});
save.args={
    source: Save
};

export const settings = Template.bind({});
settings.args={
    source: Settings
};
export const contact = Template.bind({});
contact.args={
    source: Contact
};
export const dashboard = Template.bind({});
dashboard.args={
    source: Dashboard
};
export const practiceTest = Template.bind({});
practiceTest.args={
    source: PracticeTest
};
export const vector = Template.bind({});
vector.args={
    source: Vector
};
export const cab = Template.bind({});
cab.args={
    source: Cab
};
export const close = Template.bind({});
close.args={
    source: Close
};
export const rupee = Template.bind({});
rupee.args={
    source: Rupee
};
export const bus = Template.bind({});
bus.args={
    source: Bus
};
export const filter = Template.bind({});
filter.args={
    source: Filter
};
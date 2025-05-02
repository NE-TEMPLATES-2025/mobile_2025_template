import { Lesson,Lifetime,MobilePhone,Quiz,AudioSvg,RiseSvg } from "@/assets/svgs";
import Rise from "@/assets/svgs/Rise";

 const onboarding =[
    {
        id:1,
        title:"Online Learning",
        description:"We Provide Classes Online Classes and Pre Recorded Leactures.!"
    },
    {
        id:2,
        title:"Learn from Anytime",
        description:"Booked or Same the Lectures for Future"
    },
    {
        id:3,
        title:"Get Online Certificate",
        description:"Analyse your scores and Track your results"
    }
]


const achievements =[
    {
        id:1,
        icon: Lesson,
        label:"25 lessons"
    },
    {
        id:2,
        icon: MobilePhone,
        label:"Access Mobile, Desktop & TV"
    },
    {
        id:3,
        icon: RiseSvg,
        label:"Beginner Level"
    },
    {
        id:4,
        icon: AudioSvg,
        label:"Audio Book"
    },
    {
        id:5,
        icon: Lifetime,
        label:"Lifetime Access"
    },
    {
        id:6,
        icon: Quiz,
        label:"100 Quizzes"
    },
    {
        id:7,
        icon: Lesson,
        label:"Certificate of Completion"
    },
]

const categories =[
   
    {
        id: 3,
        title:"3D Design"
    },

    {
        id: 2,
        title:"Arts & Humanities"
    },

    {
        id: 1,
        title:"Graphic Design"
    }
]

const courses = [
  {
    id: 1,
    title: "Graphic Design Advanced",
    category: "Graphic Design",
    price: "$28",
    rating: 4.2,
    students: "7830",
    
  },
  {
    id: 2,
    title: "Advertisement Design",
    category: "Graphic Design",
    price: "$42",
    rating: 4.7,
    students: "9200",
  },
  {
    id: 3,
    title: "3D Animation Basics",
    category: "3D Design",
    price: "$35",
    rating: 4.5,
    students: "6400",
  },
  {
    id: 4,
    title: "Art History",
    category: "Arts & Humanities",
    price: "$30",
    rating: 4.3,
    students: "7100",
  },
];

const mentors=[
    {
        id:1,
        name:"William K. Olivas",
        course:"3D Design"
    },
    {
        id:2,
        name:"Donald S. Channel",
        course:"Arts & Humanities"
    },
    {
        id:3,
        name:"Elvira E. Limones",
        course:"Personal Development"
    },
    {
        id:4,
        name:"Scott S. Simpson",
        course:"SEO & Marketing"
    },
    {
        id:5,
        name:"Patricia G. Peters",
        course:"Office Productivity"
    },
    {
        id:6,
        name:"Carmen P. Mercado",
        course:"Web Development"
    }
]

const topMentors=[
    {
        name:"William ",
        course:"3D Design"
    },
    {
        name:"Donald",
        course:"Arts & Humanities"
    },
    {
        name:"Elvira ",
        course:"Personal Development"
    },
    {
        name:"Scott",
        course:"SEO & Marketing"
    }
]

const reviews =[
    {

        id:1,
        person:"William S. Cunningham",
        comment:"The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitias dixit parab les esse, quod parvo",
        rating:4.5,
        likes: 587,
        time: "2 Weeks agos"

    },
    {
        id:2,
        person:"Martha E. Thompson",
        comment:"The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitias dixit parab les esse, quod parvo",
        rating:4.5,
        likes: 587,
        time: "2 Weeks agos"

    }
]
export const data = {
  onboarding,
  categories,
  courses,
  mentors,
  topMentors,
  achievements,
  reviews
};



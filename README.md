# sms

functionalities:
cognate_admin:
add school,

Entities 
1. fee{
    amount:"",
    type:full | installment,
    session:"",
    modeOfPayment:"",
    ward_id:"",
    ward_name:"",
    parent_id:"",
    status: pending | approved,
    ward_class:"",
    date:"",
}

2. result{


    
}

3. staff:{
     status:activate | deactivated,
    stateType: academic | non-academic,
    date_added:"",
    phone_number:"",
    duty_description:"",
    }

4. class{
    title:"",
    created:"",
    class_teacher:"",
    }

    lesson_plan{
    subject:"",
    lesson_plan:"",
        }

5. announcement{
     title:"",
     description:"",
     date:"",
        }

6. timeTable{
    teacher:"",
    time:"",
    duration:"",
    subject:"",
    }

    e_lib{
    item_id:"",
    item_type:book,etc

    }


7. student{
    student_id:"",
    class:[],
    performance:[],
    subjects:[]

}

8. school{
    name:"",
    school_url:"",
    sessions:[
        {
            date_start,
            date_end,
            terms[]
        }
        <!-- subdocument -->
    ],
    teachers[
        <!-- ref ID -->
    ],
    students[
        <!-- ref ID -->
    ],
    parents[
        <!-- ref ID -->
       name:"",
       wards:[ {
            parent_ward_id:"",
            parent_ward_name:"",
        }],
        feeHistory:[
            {
                amount:"",
                type:full | installement,
                session:"",
                modeOfPayment:"",

            }
        ],
        notification:[]
    ],
    <!-- staffs:[
        {
            status:activate | deactivated,
            stateType: academic | non-academic,
            date_added:"",
        }
    ], -->
}

User{

}






api endpoint

api/teachers/:roleId
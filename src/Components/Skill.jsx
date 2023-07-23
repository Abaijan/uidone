import React, { useState } from 'react';
import { Search } from '../assets/Icons';

const Skills = () => {
    const allSkills = [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "React" },
        { id: 3, name: "Angular" },
        { id: 4, name: "Vue.js" },
        { id: 5, name: "Node.js" },
        { id: 6, name: "Python" },
        { id: 7, name: "Java" },
        { id: 8, name: "C#" },
        { id: 9, name: "PHP" },
        { id: 10, name: "Ruby" },
        { id: 11, name: "HTML" },
        { id: 12, name: "CSS" },
        { id: 13, name: "TypeScript" },
        { id: 14, name: "SQL" },
        { id: 15, name: "NoSQL" },
        { id: 16, name: "Git" },
        { id: 17, name: "Webpack" },
        { id: 18, name: "Docker" },
        { id: 19, name: "RESTful API" },
      
    ];


    const [selectedSkills, setSelectedSkills] = useState([]);
    const [input, setInput] = useState(false)

    const handleChange = (skillName) => {
        if (selectedSkills.includes(skillName)) {
            setSelectedSkills(selectedSkills.filter((skill) => skill !== skillName));
        } else {
            setSelectedSkills([...selectedSkills, skillName]);
        }
    };

    const filteredSkills = allSkills.filter(
        (skill) => !selectedSkills.includes(skill.name)
    );
    const inputFocus = () => {
        setInput(true)
    }
    const inputBlur = () => {
        setInput(false)
    }

    
    return (
        <div>
            <h2 className="text-[20px] mt-[69px]">2/5 Должность</h2>
            <div className="content">
                <h1 className='font-medium text-[30px] mb-[10px] mt-[40px]'>Какие основные навыки требуются для вашей работы?</h1>
                <div className="flex flex-col gap-[30px] h-[100px] w-[912px] left-[240px]">
                    <div className=" ml-[240px] top-[210px]  flex flex-wrap gap-[10px] h-[100%] w-[1012px] left-[240px]">
                        {selectedSkills.map((skill) => (
                            <label
                                className='bg-[#C5E3F7] flex h-[35px] items-center gap-[10px] rounded-[10px] divide-inherit border-[1px] p-[10px]  '
                                key={skill}>
                                <h1 className='font-medium'>{skill}<span className='font-extrabold'>-</span></h1>
                                <input
                                    type="checkbox"
                                    className='hidden'
                                    onchange={() => filteredSkills(skill)}
                                />
                            </label>
                        ))}
                    </div>
                    <form
                        action=""
                        className=' relative rounded-[20px]  ml-[240px]  w-[875px] h-[151px]  '
                    >
                        <p className='mr-[700px] mb-[20px] text-[20px] left-[20px]'>Добавьте навыки:</p>

                        <input
                            onFocus={inputFocus}
                            onBlur={inputBlur}
                            className='relative divide-inherit border-[1px] rounded-[20px] w-[875px] h-[72px] pl-[30px] caret-size-lg text-[25px]'
                            type="text"
                        />
                        {!input && (
                            <span className='absolute left-[20px] top-[60px]'>
                                <Search />
                            </span>
                        )

                        }

                    </form>
                <div className="ml-[240px] w-[915px] h-[145px]">
                    {filteredSkills.length > 0 ? (
                        <div className="flex  flex-wrap gap-[20px]  mt-[20px]">
                            {filteredSkills.map((skill) => (
                                <label
                                    className='bg-[#C5E3F7] flex h-[35px] items-center gap-[10px] rounded-[10px] divide-inherit border-[1px] p-[10px]  '
                                    key={skill.id}>
                                    <h1 className='font-medium'>{skill.name}<span className='font-extrabold'>+</span></h1>
                                    <input
                                        type="checkbox"
                                        checked={selectedSkills.includes(skill.name)}
                                        onChange={() => handleChange(skill.name)}
                                        className='hidden'
                                    />
                                </label>
                            ))}
                        </div>
                    ) : (
                        <p className='relative top-[80px]'>Все навыки выбраны!</p>
                    )}
                </div>
                <button className='rounded-[13px] bg-[#4F50C0] text-white text-[20px] border-[1px] w-[88px] h-[50px] p-[10px] ml-[1140px]'>Далее</button>
                </div>

            </div>
        </div>
    );
};

export default Skills;

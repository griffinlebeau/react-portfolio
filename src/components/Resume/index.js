import React from 'react';
import resumeImg from '../../assets/large/Griffin-LeBeau-Resume.jpg'

function Resume(){
    return (
        <div className='main' style={{ display: 'flex', backgroundColor: '#D6F9DD' }}>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px'}}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>Skills:</h2>
                    <p style={{ fontWeight: 'bolder', marginLeft: '25%', lineHeight: '3.5', textAlign: 'center', width: '50%' }}>
                        Agile Workflow | React | Git proficiency | Website optimization | Responsive design | HTML | CSS | CMS management | API design knowledge | State Management Design | SQL integration | Node.js | MongoDB Software Proficiency | ​​UX Design | UI improvements | Adobe Suite
                    </p>
                </div>

            </div>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <a style={{ margin: '2%', fontWeight: 'bolder', textDecoration: 'none', fontSize: 'x-large' }} href="https://drive.google.com/file/d/1ULt26gQO7tN12p1_S5vpPUm-EOK-98TP/view?usp=sharing" target="_blank" >Download</a>
                    <img alt={'resume'} src={resumeImg} style={{ margin: '2%', width: '50%' }} />
                </div>

            </div>

        </div>
    )
}
export default Resume;
import React from 'react'

const FooterMark = () => {
    return (
        <div>
            <div>
                <div className="grid Foot shadow_dreamy" style={{ backgroundColor: "#dadae0", padding: '5rem', 'margin-top': '2rem' }}>
                    <div className="grid2" style={{ 'text-align': 'center' }}>
                        <div><h3>Follow us on: </h3>
                            <a href="https://www.instagram.com/mitambi.marketing/" target="_blank"><img src="images/ins.png" alt="" style={{ width: '40px' }} /></a>
                        </div>

                        <div><h3>Quick Contacts: </h3>
                            <a href="https://wa.me/+919560816603" target="_blank"><img src="images/wa.png" alt="" style={{ width: '40px' }} /></a>
                            &emsp;&emsp;<a href="https://join.skype.com/invite/zqy7FX8nbiho" target="_blank"><img src="images/sk.png" alt="" style={{ width: '40px' }} /></a>
                        </div>

                    </div>

                </div>
                <div className="footer shadow_dreamy" style={{ backgroundColor: "#f8f9fa" }}>
                    <div className="leftSide">info@mitambisolutions.com</div>
                    <div className="rightSide">Copyright &copy; 2022 All Rights Reserved.</div>

                </div>

            </div>
        </div >
    )
}

export default FooterMark

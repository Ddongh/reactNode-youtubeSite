import React,  {useEffect, useState}from 'react'
import { Row, Col, List, Avatar, Input } from 'antd'
import Axios from 'axios'
// import { $CombinedState } from 'redux'
// import { post } from '../../../../../server/routes/video'

function VideoDetailPage(props) {

    const videoId = props.match.params.videoId
    const variable = { videoId: videoId }

    const [videoDetail, setvideoDetail] = useState([])
    
    useEffect(() => {
        Axios.post('/api/video/getVideoDetail', variable)
            .then(response => {
                if(response.data.success) {
                    setvideoDetail(response.data.videoDetail)
                } else {
                    alert('비다오 정보를 가져오기를 실패했습니다.')
                }
            })

    }, [])
    
    if(videoDetail.writer) {
        return (
            <Row gutter={[16, 16]}>
                <Col lg={18} xs={24} >
                    <div style={{ width: '100%', padding: '3rem 4rem'}}>
        
                        <video style={{ width: '100%'}} src={`http://localhost:5001/${videoDetail.filePath}`} controls />
         
                        <List.Item
                            actions
                        >
                            <List.Item.Meta
                                // Avatar={<Avatar src={videoDetail.writer.image} /> }
                                title={videoDetail.writer.name}
                                description={videoDetail.description}
                            />
                        </List.Item>
        
                        {/* Comments */}
                    </div>
                </Col>
        
                <Col lg={6} xs={24} >
                    Side Videos
                </Col>
            </Row>
          )
    } else {
        return (
            <div> ...loding...</div>
        ) 
    }
    

  
}

export default VideoDetailPage
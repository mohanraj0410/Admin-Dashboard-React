import { BellOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar, Badge, Drawer, List, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const Index = () => {
    const [comments, setComments] = useState([]);
    const [commentOpen, setCommentOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/comments');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                if (result && result.comments) {
                    setComments(result.comments);  // Extract the comments array from the response
                } else {
                    console.error("Unexpected response structure:", result);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(comments);

    return (
        <div className='AppHeader' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#f0f2f5', borderBottom: '1px solid #e8e8e8' }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="large" style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A</Avatar>
                <Typography.Title level={4} style={{ margin: '0 10px' }}>ADMIN</Typography.Title>
            </div>
            <Typography.Title level={3} style={{ margin: '0' }}>DASHBOARD</Typography.Title>
            <div>
                <Space>
                    <Badge count={3} dot>
                        <MailOutlined style={{ fontSize: '25px', color: '#08c', cursor: "pointer" }} />
                    </Badge>
                    <Badge style={{ width:"10px"}} count={comments.length}>
                        <BellOutlined
                            onClick={() => setCommentOpen(true)}
                            style={{ fontSize: '25px', color: '#08c', cursor: "pointer" }}
                        />
                    </Badge>
                </Space>
                <Drawer
                    title="Comments"
                    open={commentOpen}
                    onClose={() => setCommentOpen(false)}
                    width={400}
                >
                    <List
                        dataSource={comments}
                        renderItem={(item) => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    description={item.body}
                                />
                            </List.Item>
                        )}
                    />
                </Drawer>
            </div>
        </div>
    )
}

export default Index;

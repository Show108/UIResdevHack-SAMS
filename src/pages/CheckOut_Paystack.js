import { useEffect, useState } from "react";
import { PaystackButton } from 'react-paystack';
import { TabList, TabPanel, TabPanels, Tabs, Tab, Container, FormControl, FormHelperText, Select, FormLabel, Button, Box, Flex } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Form, NavLink, Outlet } from "react-router-dom";
import paystack from '../images/paystack.svg'

export default function CheckOut_Paystack() {
    useEffect(() =>{
        document.body.classList.add('bg-color')
    }, [])
    const publicKey = process.env.PAYSTACK_PUBLIC_KEY;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')

    const resetForm = () => {
        setEmail('');
        setName('');
        setPhone('');
        setAmount('')
      };
    
      const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
          amount
        },
        publicKey,
        text: 'Subscribe',
        onSuccess: ({ reference }) => {
          alert(
            `Your purchase was successful! Transaction reference: ${reference}`
          );
          resetForm();
        },
        onClose: () => alert("We would be here, incase you change your mind"),
      };

  return (
    <div>
        <Flex flexDir={'column'} align={'center'}>
        <Box w={'150px'} pos={'absolute'} top={'60px'}>
            <img src={paystack} alt="paystack"/>
        </Box>
        <Container border={'2px solid black'} mt={'100px'}>
                
                <Tabs variant={'solid-rounded'}>
                    <TabList ml={'170px'} py={'20px'}>
                        <Tab _selected={{color:'white', bg:'red.500'}}>Monthly</Tab>
                        <Tab _selected={{color:'white', bg:'red.500'}}>Yearly</Tab>

                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Form>
                                <FormControl mb={'20px'}>
                                    <input type="text" placeholder="Name" value={name}
                                        onChange={(e) => setName(e.target.value)} style={{outline:'none', width:'100%',backgroundColor:'#f6efe7', padding:'20px', border:'1px solid'}}/>
                                        <FormHelperText>Your name should be your account name</FormHelperText>
                                </FormControl>
                                <FormControl mb={'20px'}>
                                    <input type="text" placeholder="Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} style={{outline:'none', width:'100%',backgroundColor:'#f6efe7', padding:'20px', border:'1px solid'}}/>
                                        <FormHelperText>Do well to input your correct mail</FormHelperText>
                                </FormControl>
                                <FormLabel>Subcription Fee</FormLabel>
                                <FormControl mb={'30px'}>
                                    <Select placeholder="" value={amount}
                                            onChange={(e) => setAmount(e.target.value)} style={{outline:'none', width:'100%',backgroundColor:'#f6efe7', border:'2px solid'}}>
                                                <option>NGN 5000</option>
                                                <option>NGN 20,000</option>
                                                <option>NGN 60,000</option>
                                                <option>NGN 120,000</option>
                                            </Select>
                                </FormControl>
                                    
                                <FormControl mb={'20px'}>
                                    <input type="text" placeholder="Contact" value={phone}
                                        onChange={(e) => setPhone(e.target.value) }style={{outline:'none', width:'100%',backgroundColor:'#f6efe7', padding:'20px', border:'1px solid'}}/>
                                </FormControl>
                                
                            </Form>
                        </TabPanel>
                        <TabPanel>
                            <Form>
                            <FormControl mb={'20px'}>
                                    <input type="text" placeholder="Name" value={name}
                                        onChange={(e) => setName(e.target.value)}  style={{outline:'none', width:'100%',backgroundColor:'#f6efe7', padding:'20px', border:'1px solid'}}/>
                                        <FormHelperText>Your name should be your account name</FormHelperText>
                                </FormControl>
                                <FormControl mb={'20px'}>
                                    <input type="text" placeholder="Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}  style={{outline:'none', width:'100%',backgroundColor:'#f6efe7', padding:'20px', border:'1px solid'}}/>
                                        <FormHelperText>Do well to input your correct mail</FormHelperText>
                                </FormControl>

                                <FormControl mb={'30px'}>
                                    <FormLabel>Subcription Fee</FormLabel>
                                    <Select value={amount}
                                        onChange={(e) => setAmount(e.target.value)} style={{ width:'100%', backgroundColor:'#f6efe7', border:'2px solid'}}>
                                            <option>NGN 48,000</option>
                                            <option>NGN 192,000</option>
                                            <option>NGN 576,000</option>
                                            <option>NGN 1,152,000</option>
                                        </Select>
                                </FormControl>
                                <FormControl mb={'20px'}>
                                    <input type="text" placeholder="Contact" value={phone}
                                        onChange={(e) => setPhone(e.target.value)}  style={{outline:'none', width:'100%',backgroundColor:'#f6efe7', padding:'20px', border:'1px solid'}}/>
                                </FormControl>
                                
                            </Form>
                            </TabPanel>
                    </TabPanels>

                </Tabs>
                <Button w={'100%'} mb={'30px'}  bgColor="#213655"  p={'20px'} color={'white'}>
                    <PaystackButton  {...componentProps} />
                </Button>
        </Container>
        </Flex>
        
        
        <Outlet />
        
    </div>
  )
}
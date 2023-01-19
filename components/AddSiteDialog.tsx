import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { FocusableElement } from '@chakra-ui/utils';
import { SiteModel } from '../models/site';
import { createSite } from '../lib/db';

const AddSiteDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setFocus, register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SiteModel>();
  const initialFocusRef = useRef<FocusableElement | null>(null);
  const { ref: nameInputRef, ...nameInputRegister } = register('name', { required: 'Required' });

  useLayoutEffect(() => {
    if (isOpen) {
      console.log('set focus');
      setFocus('url')
    }
  }, [isOpen, setFocus]);

  return (
    <>
      <Button fontWeight={600} onClick={onOpen}>Add Your First Site</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialFocusRef}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                {...nameInputRegister}
                ref={(e) => {
                  nameInputRef(e);
                  initialFocusRef.current = e;
                }}
                placeholder="My site"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                {...register('url', { required: 'Required' })}
                placeholder="https://mysite.com"
                type="url"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>Cancel</Button>
            <Button type="submit" colorScheme='blue' isLoading={isSubmitting}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default AddSiteDialog;

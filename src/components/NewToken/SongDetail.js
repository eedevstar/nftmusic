import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { Input, CopyInput } from "@components/common/Input/index";
import Icon from "@components/common/Icon";

const ControlBox = styled.div`
  width: 100%;
  height: 100px;
  &: first-of-type {
    margin-top: 30px;
  }
`;

const SongDetail = ({ name, ft, genre, update: updateSong }) => {
  const theme = useTheme();

  const [values, setValues] = useState({
    name: name,
    ft: ft,
    genre: genre,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

    updateSong({[event.target.name]: event.target.value});
  };

  return (
    <>
      <form autoComplete="off">
        <ControlBox>
          <Input
            type="text"
            varient="grey"
            label="Song Name"
            msgType=""
            msgText=""
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </ControlBox>

        <ControlBox>
          <Input
            type="text"
            varient="grey"
            name="ft"
            label="Featured Artists"
            msgType=""
            msgText=""
            value={values.ft}
            onChange={handleChange}
          />
        </ControlBox>

        <ControlBox>
          <CopyInput
            type="text"
            varient="grey"
            name="genre"
            label="Genre"
            msgType=""
            msgText=""
            value={values.genre}
            onChange={handleChange}
          />
        </ControlBox>
      </form>
    </>
  );
};

export default SongDetail;

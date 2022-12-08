import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useTranslation } from "react-i18next";

export default function NativeSelectDemo() {
    const { i18n } = useTranslation();
    return (
        <Box style={{ width: "55px" }}>
            <FormControl >
                <NativeSelect
                     value={i18n.language}
                     onChange={(e) =>
                       i18n.changeLanguage(e.target.value)
                     }
                    inputProps={{
                        name: 'language',
                        id: 'uncontrolled-native',
                    }}

                >
                    <option value={'en'}>EN</option>
                    <option value={'sr'}>RS</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}

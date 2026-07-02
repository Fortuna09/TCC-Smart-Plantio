import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Button, useMediaQuery,Snackbar, Alert,Tooltip,IconButton, CircularProgress } from "@mui/material";
import { useNavigate,useLocation,useParams } from 'react-router-dom';
import { DataGrid,GridToolbarContainer, GridToolbarColumnsButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../components/Header";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";
import secureLocalStorage from 'react-secure-storage';


const Properties = () => {
    const token = secureLocalStorage.getItem('auth_token');
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = useMediaQuery("(max-width: 800px)");
    const isSmallDivice = useMediaQuery("(max-width: 1300px)");
    const [propriedades, setPropriedades] = useState([]);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const message = Number(query.get('message'));
    const [openSnackbar, setOpenSnackbar] = useState(!!message);
    const [snackbarMessage, setSnackbarMessage] = useState(""); 

    useEffect(() => {
        switch (message) {
          case 1:
            setSnackbarMessage("Propriedade criada!");
            break;
    
          case 2:
            setSnackbarMessage("Edição realizada!");
            break;
    
          case 3:
            setSnackbarMessage("Propriedade excluída!");
            break;
    
          case 4:
            setSnackbarMessage("Usuário adicionado na propriedade!");
            break;

          case 5:
            setSnackbarMessage("Usuário removido da propriedade!");
            break;
    
          default:
            //console.log("Mensagem não reconhecida.");
            break;
        }
      }, [message]);

    const columns = [
        { field: "name", headerName: "Nome", flex: 1, minWidth: 100, cellClassName: "name-column--cell", resizable: false },
        { field: "city", headerName: "Cidade", flex: 1, minWidth: 100, cellClassName: "city-column--cell", resizable: false },
        { field: "area", headerName: "Área", type: "number", minWidth: 100, headerAlign: "left", align: "left", resizable: false },
        {
            field: "access",
            headerName: "Nível de Acesso",
            flex: 1,
            minWidth: 100,
            headerAlign: "center",
            resizable: false,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="10px auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "owner" ? colors.orangeAccent[500] : colors.orangeAccent[300]
                        }
                        borderRadius="4px"
                        sx={{color: theme.palette.mode === 'dark' ?colors.primary[400]: colors.grey[100]}}
                    >
                        {access === "owner" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "guest" && <LockOpenOutlinedIcon />}
                        {!isSmallDivice && (
                            <Typography
                                sx={{ ml: "5px", fontWeight: "bold", }}
                            >
                                {access === "owner" ? "Proprietário" : "Permissão"}
                            </Typography>
                        )}
                    </Box>
                );
            }
        },
        {
            field: "actions",
            headerName: "Ações",
            flex: 1,
            renderCell: (params) => {
                const { id } = params.row;

                return (
                    <Box 
                        display="flex" 
                        justifyContent="center" 
                        gap="8px"
                        width="100%"
                        m="10px auto"
                    >
                        <Tooltip title="Visualizar">
                            <IconButton onClick={() => handleView(id)} sx={{ color: colors.greenAccent[500]}}>
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                        {params.row.access === "owner" && (
                            <Tooltip title="Editar">
                                <IconButton onClick={() => navigate(`/propriedades/edit/${id}`)} sx={{ color: colors.orangeAccent[500]}}>
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                );
            },
            headerAlign: "center"
        },
    ];


    useEffect(() => {
        const storedUser = secureLocalStorage.getItem('userData'); 
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (token) { 
            const fetchPropriedadesData = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(`/user`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setPropriedades(response.data);
                } catch (error) {
                    if (error.response?.status === 401) {
                        alert('Sessão expirada. Faça login novamente.');
                        secureLocalStorage.removeItem('userData');
                        secureLocalStorage.removeItem('auth_token');
                        window.location.href = '/login';
                    } else {
                        console.log("ERRO - ao buscar as propriedades." + error);
                    }
                } finally {
                    setLoading(false);
                }
            };
            fetchPropriedadesData();
        }
    }, [token]);  

    useEffect(() => {
        //console.log(propriedades); 
    }, [propriedades]);

    const navigate = useNavigate(); 
    const handleView = (id) => {
        navigate(`/propriedades/${id}`);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Propriedades" subtitle="Gerencie as suas propriedades" />
                <Box>
                    <Button
                        sx={{
                        backgroundColor: colors.mygreen[400],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        }}
                        onClick={() => navigate(`/propriedades/add`)}

                    >
                        <AddCircleOutlineIcon sx={{ mr: isMobile? "0px" :"10px" }} />
                        {!isMobile && ("Adicionar Propriedade")}
                    </Button>
                </Box>
            </Box>
            <Box m="20px 0 0 0" height="75vh" maxWidth="1600px" mx="auto"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.mygreen[700],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.mygreen[400],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.mygreen[400],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.mygreen[200]} !important`,
                    },
                }}>

                    {loading ? (
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="20px"
                            mt="50px"
                        >
                            <CircularProgress size={60} sx={{ color: colors.mygreen[400] }} />
                            <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" color={colors.grey[100]}>
                                Carregando propriedades...
                            </Typography>
                        </Box>
                    ) : propriedades.length === 0 ? (
                        <Box
                            display="flex"
                            flexDirection= "column"
                            alignItems="center"  
                            justifyContent="center"
                            gap="20px"
                            mt="50px"
                        >
                            <Typography variant={isMobile ? "h6": "h5"} fontWeight="bold" color={colors.grey[100]}>
                                Nenhuma propriedade encontrada.
                            </Typography>
                        </Box>
                    ) : (
                        <DataGrid
                            rows={propriedades}
                            columns={columns}
                            localeText={{
                                toolbarColumns: 'Colunas',
                                toolbarColumnsLabel: 'Selecionar colunas',
                                toolbarDensity: 'Densidade',
                                toolbarDensityLabel: 'Densidade',
                                toolbarDensityCompact: 'Compacto',
                                toolbarDensityStandard: 'Padrão',
                                toolbarDensityComfortable: 'Confortável',
                                MuiTablePagination: {
                                    labelRowsPerPage: 'Linhas por página:',
                                    labelDisplayedRows: ({ from, to, count }) =>
                                        `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`,
                                },
                                noRowsLabel: 'Nenhuma propriedade encontrada.',
                                footerTotalRows: 'Linhas totais:',
                                footerRowSelected: count =>
                                    count !== 1 ? `${count.toLocaleString()} linhas selecionadas` : `${count.toLocaleString()} linha selecionada`,
                            }}
                            slots={{ toolbar: CustomToolbar }}

                        />
                    )}
                
            </Box>
            <div>
                {message !== 0  && (
                    <Snackbar 
                    open={openSnackbar} 
                    autoHideDuration={2500} 
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity="success"
                        variant="filled"
                        sx={{ 
                        width: '450px', 
                        height: '60px',
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'center', 
                        fontSize: '20px',
                    }}
                    >
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
                )}
            </div>
            
        </Box>
    );
};

export default Properties;

function CustomToolbar() {
    const theme = useTheme();
    const colors = theme.palette.mode;
    return (
      <GridToolbarContainer >
        <Box sx={{
            '& .MuiButton-root': { 
              color: colors === 'dark' ?'#f2f0f0' :  "#1F2A40" , 
            },
            display: 'flex',
          }}>
          <GridToolbarColumnsButton  /> 
          <GridToolbarDensitySelector  /> 
        </Box>
      </GridToolbarContainer>
    );
};

<div>
  <div>
    <CustomButton text="검색" onClick={showList} />
  </div>
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <div className={`flex gap-x-5`}>
      <div className="flex items-center relative">
        <Input
          placeholder="자율대화명"
          className="w-[250px]"
          id="searchInput"
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="absolute right-1 hover:cursor-pointer" onClick={clearInput} />
      </div>
    </div>
    <div>
      <TableContainer component={Paper} className="mx-auto min-w-[800px] overflow-auto h-[600px]">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                "td,th": {
                  textTransform: "uppercase",
                  textAlign: "center",
                },
              }}
            >
              <TableCell>선택</TableCell>
              <TableCell>에피소드명</TableCell>
              <TableCell>연출 여부</TableCell>
              <TableCell>생성일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="dataTable">
            {data?.map((element: any, index: any) => (
              <TableRow sx={{ "td,th": { border: 1, textAlign: "center" } }} hover={true} key={index}>
                <TableCell>
                  <input
                    type="checkbox"
                    value={element.id}
                    onChange={checkedList}
                    name={element.title}
                    checked={idx.some((el: any) => element.title === el.title)}
                  />
                </TableCell>
                <TableCell>{element.userId}</TableCell>
                <TableCell>{element.id}</TableCell>
                <TableCell>{element.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

    <DialogActions>
      <div className="flex justify-end">
        <CustomButton text="저장" onClick={addList} />
      </div>
    </DialogActions>
  </Dialog>
</div>;

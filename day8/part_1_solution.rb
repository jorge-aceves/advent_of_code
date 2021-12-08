def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end


file_name = "input.txt"
arr = read_file(file_name).split("\n")
total = 0
arr.each do |line|
  output = line.split("|").last.strip()
  output.split(" ").each do |value|
    total += 1 if value.size <= 4 || value.size == 7
  end
end
p total